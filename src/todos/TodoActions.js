function handleErrors(response) {
    if (!response.ok) {
        alert(response.statusText)
        throw Error(response.statusText);
    }
    return response;
}

export const createTodo = (todo) => {
    return (dispatch) => {
        dispatch({type: "CREATING_TODO" });
        fetch(`http://localhost:3001/api/v1/users/${todo.user_id}/todos`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + localStorage.token,
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body: JSON.stringify({todo: todo})
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(todo => {
                dispatch({type: "TODO_CREATED", todo});
        })
        .catch(error => console.log(error))
    }
};

export const getTodos = userId => {
    return(dispatch) => {
        dispatch({type: "FETCHING_TODOS"});
        fetch(`http://localhost:3001/api/v1/users/${userId}/todos`, {
            headers: {
                "Authorization": "Bearer " + localStorage.token
            }
        })
        .then(handleErrors)
        .then(res => res.json())
        .then(todos => {
                dispatch({type: "TODOS_RECEIVED", todos})
        })
    }
};

export const todoCompleted = (userId, id) => {
    return(dispatch) => {
        dispatch({type: "DELETING_TODO"});
        fetch(`http://localhost:3001/api/v1/users/${userId}/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer " + localStorage.token,
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
        })
        .then(handleErrors)
        .then(() => dispatch({type: "TODO_DELETED", id}))
        .catch(error => {
            console.log(error)
        }) 
    }
}

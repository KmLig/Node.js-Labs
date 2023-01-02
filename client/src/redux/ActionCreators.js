import * as ActionTypes from './ActionTypes';


export const addUser = (users) => ({
    type: ActionTypes.ADD_USER,
    payload: users
})

export const postUser = (newUser) => (dispatch) => {
    const newUser_add = {
        user: newUser.user
    };

    return fetch("http://localhost:5000/", {
        method: "POST",
        body: JSON.stringify(newUser_add),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "Error " + response.status + ": " + response.statusText
              );
              error.response = response;
              throw error;
            }
          },
          (error) => {
            throw error;
          }
        )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          dispatch(addUser(response));
        })
        .catch((error) => {
          console.log("Post user", error.message);
          alert("New user could not be posted\nError: " + error.message);
        })
        .finally(() => {
          this.setState({
            userName: "",
            redirect: true,
          });
        });
}

export const userRendering = (users) => ({
    type: ActionTypes.USERS_RENDERING,
    payload: users
})

export const fetchUser = () => (dispatch) => {
    return fetch('http://localhost:5000/')
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        let errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((staffs) => dispatch(userRendering(staffs)))
    .catch((error) => {
        console.log("Fetch user", error.message);
        alert("User list could not be fetched\nError: " + error.message)});
}
const githubReducer = (state, action) => {
    switch(action.type) {
        case 'Get_Users': 
            return  { 
                ...state ,
                users: action.payload,
                IsLoading: false,
            }     
        case 'GET_USER_AND_REPOS': 
            return  { 
                ...state ,
                user: action.payload.user,
                repos: action.payload.repos,
                IsLoading: false,
        }         
        case 'Set_Loading':
        return {
            ...state,
            IsLoading: true
        }
        case 'Clear_Users':
            return {
                ...state,
                users: []
            }       
        default: {
            return state
        }
    }
}

export default githubReducer
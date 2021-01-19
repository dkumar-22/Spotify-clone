export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null, //what we are playing the song we have mentioned
  token: "BQCmlgqpFJ9EZozUh13qAFx5wAb3NcQWuVvn2tr090xKSb57zuaUgrfX6WcL8jI3fhTnMW-K3yOqm_1cD8pEGg1QAfFXn3Xkx0EV8b9GKVjzwuGxVbouAfRoQnRCeckFNR72SK6r8dpVkp0nJuCj9JRUSes"

  //Remove after finishing the debugging
};

function reducer(state, action) {
    console.log("🕺",action);
    switch(action.type)
    {
        case 'SET_USER':
            return({
                ...state,
                user: action.user
            })
        case 'SET_TOKEN' :
            return({
                ...state,
                token:action.token
            })
        case 'SET_PLAYLISTS':
            return({
                ...state,
                playlists:action.playlists
            })
        default: 
            return state;
    }
}

export default reducer;
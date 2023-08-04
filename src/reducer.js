export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token:
  // "BQDp6hfjdt-0wN_-GbtzoIqMX03qNzXsDQNZGSXetof3YvyVkbCoUW4eUgrQ1-6dUK0t4FhcUluNtor4mw2gUomATDVhTj7vuyD2Z_MJLOX5w-wN42XupFzA-lQEqU8_9Je70l1Olnpi3yHhd2PRErDF-MqtGtg8PctM2FbXU_HZPPXoi7vgJRlX7Y34b75alEpJlyusVvqnSvwalVg_",
};
//"BQDp6hfjdt-0wN_-GbtzoIqMX03qNzXsDQNZGSXetof3YvyVkbCoUW4eUgrQ1-6dUK0t4FhcUluNtor4mw2gUomATDVhTj7vuyD2Z_MJLOX5w-wN42XupFzA-lQEqU8_9Je70l1Olnpi3yHhd2PRErDF-MqtGtg8PctM2FbXU_HZPPXoi7vgJRlX7Y34b75alEpJlyusVvqnSvwalVg_"

const reducer = (state, action) => {
  //console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;

/* eslint-disable import/no-anonymous-default-export */
import { SET_BLOGS } from "../action"

export default(state = [], action) => {
    switch(action.type) {
      case SET_BLOGS:
        return  action.data
      default: return state
    }
}
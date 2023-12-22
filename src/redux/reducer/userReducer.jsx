// action types
import { FETCH_USER_LOGIN_SUCCESS } from "../action/userAction";

// trạng thái ban đầu
const INITIAL_STATE = {
  account: {
    id_user: "",
    link_avatar: "",
    user_name: "",
    ip_register: "",
    device_register: "",
    email: "",
    count_sukien: "",
    count_comment: "",
    count_view: "",
    token: "",
  },
  isAuthenticated: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        account: {
          id_user: action?.payload?.id_user,
          link_avatar: action?.payload?.link_avatar,
          user_name: action?.payload?.user_name,
          ip_register: action?.payload?.ip_register,
          device_register: action?.payload?.device_register,
          email: action?.payload?.email,
          count_sukien: action?.payload?.count_sukien,
          count_comment: action?.payload?.count_comment,
          count_view: action?.payload?.count_view,
          token: action?.payload?.token,
        },
        isAuthenticated: true,
      };

    default:
      return state; // Trả về trạng thái hiện tại nếu không có action nào khớp
  }
};

export default userReducer;

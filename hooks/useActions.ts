import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actions } from '../store/tasks.slice'

export default function useActions() {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}
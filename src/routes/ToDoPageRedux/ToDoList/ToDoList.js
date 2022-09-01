import { useSelector, useDispatch } from "react-redux";

import List from "../../../components/List/List";
import ListItem from "../../../components/ListItem/ListItem";

import UPDATE_TO_DO from '../../../components/ListItem/ListItem'
import DELETE_TO_DO from "../../../components/ListItem/ListItem";

export default function ToDoList() {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()

    // console.log(data)

    return (
        <List>
            {data.map((item, index) => {
                return (
                    <ListItem
                        onChange={(e) => {
                            dispatch({
                                type: UPDATE_TO_DO,
                                payload: {
                                    index: index,
                                    value: e.target.value
                                }
                            })
                        }}
                        onDelete={(e) => {
                            dispatch({
                                type: DELETE_TO_DO,
                                payload: {
                                    index: index
                                }
                            })
                        }}
                        key={item.id}
                        value={item.value}
                    />
                )
            })}
        </List>
    )
}
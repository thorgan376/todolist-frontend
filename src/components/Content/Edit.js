import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import axios from 'axios';
import MainContent from './MainContent';

function Edit(props) {
    const [title, setTitle] = useState();
    useEffect() => {

    }
    if{//nếu có id => edit cái cũ

    }
    return(//TH2: trường hợp này ko có id = thêm task mới
        <div className= "Edit">
            <input>
            </input>
        </div>
    )

}

export default Edit;
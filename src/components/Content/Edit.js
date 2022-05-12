import React, {useState, useEffect} from 'react';
import data from "./data.json";
// data.todoist: chỉ import đúng một cái,
// data: import hết những thứ trong file json
import MainContent from './MainContent';
import './Content.css'

function Edit(props) {
    const [title, setTitle] = useState();

    return(//TH2: trường hợp này ko có id = thêm task mới
        <div className= "editor">
            <h1></h1>
        </div>
    )

}

export default Edit;
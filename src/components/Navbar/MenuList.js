import React from "react";
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalculateIcon from '@mui/icons-material/Calculate';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {Link} from "react-router-dom";
import Edit from "../Content/Form";
import MainContent from "../Content/MainContent";

const IconInList = {
    marginRight: '0.5rem',
}

export default function MenuList() {
    return (
        <div className="mt-12 w-[305px] h-screen">
            <ul className="fixed bg-zinc-50 h-screen w-1/5 pl-12 pt-8">
                <li>
                    <span>
                        <Link to="/about">
                            <span className="text-[#14aaf5]" style={IconInList}><MailOutlineIcon/></span>
                            About
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link to="/">
                            <span className="text-[#299438]" style={IconInList}><CalendarMonthIcon/></span>
                            Today
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link to="/upcoming">
                            <span className="text-[#af38eb]" style={IconInList}><CalculateIcon/></span>
                            Upcoming
                        </Link>
                    </span>
                </li>
                <li>
                    <span>
                        <Link to="/filtersandlabel">
                            <span className="text-[#ff9933]" style={IconInList}><GridViewIcon/></span>
                            Filters And Label
                        </Link>
                    </span>
                </li>
            </ul>
        </div>
    )
}
export function About(){
    return(
        <div>
            <h1>Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus. Mi proin sed libero enim sed. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Ut tristique et egestas quis. Cursus eget nunc scelerisque viverra mauris in aliquam. Mollis nunc sed id semper risus. Dignissim sodales ut eu sem integer vitae justo. Nisl purus in mollis nunc sed id semper. Proin fermentum leo vel orci porta. Mi proin sed libero enim. Sagittis orci a scelerisque purus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Consequat nisl vel pretium lectus quam id. Maecenas pharetra convallis posuere morbi.

Ut eu sem integer vitae justo eget. Sed elementum tempus egestas sed sed risus pretium. Quam viverra orci sagittis eu volutpat. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Amet cursus sit amet dictum. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Arcu non sodales neque sodales ut etiam. Tortor posuere ac ut consequat semper viverra nam. Nec tincidunt praesent semper feugiat nibh sed. Gravida quis blandit turpis cursus. In arcu cursus euismod quis viverra nibh cras. Condimentum id venenatis a condimentum vitae sapien pellentesque. Id consectetur purus ut faucibus pulvinar elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Euismod nisi porta lorem mollis aliquam ut porttitor. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam id diam maecenas ultricies mi eget mauris. Nisl purus in mollis nunc sed id. Et tortor at risus viverra adipiscing at in tellus integer.

Erat velit scelerisque in dictum non consectetur a erat. Pulvinar elementum integer enim neque volutpat. Mauris in aliquam sem fringilla ut. In nisl nisi scelerisque eu ultrices vitae auctor eu. Etiam non quam lacus suspendisse. Nisl pretium fusce id velit ut tortor pretium. Vel eros donec ac odio tempor. Varius morbi enim nunc faucibus. Ornare suspendisse sed nisi lacus sed viverra tellus. Odio euismod lacinia at quis. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet venenatis urna cursus eget nunc scelerisque. Fusce ut placerat orci nulla pellentesque dignissim enim sit.

Tempor id eu nisl nunc mi ipsum. Sit amet risus nullam eget felis eget nunc. Auctor eu augue ut lectus. Sodales neque sodales ut etiam. Pharetra diam sit amet nisl suscipit. Sollicitudin tempor id eu nisl nunc mi. Condimentum lacinia quis vel eros donec ac odio tempor. Risus in hendrerit gravida rutrum quisque non tellus orci. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed felis eget velit aliquet sagittis id consectetur. Gravida cum sociis natoque penatibus et magnis dis. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Curabitur vitae nunc sed velit dignissim sodales. Congue quisque egestas diam in arcu cursus euismod. Ac auctor augue mauris augue neque gravida. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquet eget sit amet tellus cras.

Augue ut lectus arcu bibendum at. Tortor condimentum lacinia quis vel eros donec ac. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Vitae ultricies leo integer malesuada. Pharetra sit amet aliquam id diam maecenas ultricies. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames. Suscipit adipiscing bibendum est ultricies integer quis. Lobortis mattis aliquam faucibus purus in massa. Integer quis auctor elit sed vulputate mi sit. Aenean euismod elementum nisi quis eleifend quam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Congue quisque egestas diam in arcu cursus euismod quis viverra. Magna sit amet purus gravida quis blandit. Pharetra convallis posuere morbi leo urna. Vitae aliquet nec ullamcorper sit amet. Donec et odio pellentesque diam.

Amet aliquam id diam maecenas ultricies mi eget. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ut lectus arcu bibendum at varius vel. Mattis rhoncus urna neque viverra justo nec ultrices. A iaculis at erat pellentesque adipiscing commodo elit at. Vel pharetra vel turpis nunc eget lorem. Amet nisl purus in mollis nunc sed id. Adipiscing diam donec adipiscing tristique risus. Arcu odio ut sem nulla. Pellentesque sit amet porttitor eget. Elit at imperdiet dui accumsan sit amet. At imperdiet dui accumsan sit amet.</h1>
        </div>
    )
}
export function Today(){
    return(
        <div className="fixed justify-center w-[79.924%]">
            <MainContent/>
        </div>
    )
}
export function Upcoming(){
    return(
        <div>
            <h1>Pulvinar elementum integer enim neque volutpat. Mauris in aliquam sem fringilla ut. In nisl nisi scelerisque eu ultrices vitae auctor eu. Etiam non quam lacus suspendisse. Nisl pretium fusce id velit ut tortor pretium. Vel eros donec ac odio tempor. Varius morbi enim nunc faucibus. Ornare suspendisse sed nisi lacus sed viverra tellus. Odio euismod lacinia at quis. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet venenatis urna cursus eget nunc scelerisque. Fusce ut placerat orci nulla pellentesque dignissim enim sit.

Tempor id eu nisl nunc mi ipsum. Sit amet risus nullam eget felis eget nunc. Auctor eu augue ut lectus. Sodales neque sodales ut etiam. Pharetra diam sit amet nisl suscipit. Sollicitudin tempor id eu nisl nunc mi. Condimentum lacinia quis vel eros donec ac odio tempor. Risus in hendrerit gravida rutrum quisque non tellus orci. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed felis eget velit aliquet sagittis id consectetur. Gravida cum sociis natoque penatibus et magnis dis. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Curabitur vitae nunc sed velit dignissim sodales. Congue quisque egestas diam in arcu cursus euismod. Ac auctor augue mauris augue neque gravida. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquet eget sit amet tellus cras.

Augue ut lectus arcu bibendum at. Tortor condimentum lacinia quis vel eros donec ac. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Vitae ultricies leo integer malesuada. Pharetra sit amet aliquam id diam maecenas ultricies. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames. Suscipit adipiscing bibendum est ultricies integer quis. Lobortis mattis aliquam faucibus purus in massa. Integer quis auctor elit sed vulputate mi sit. Aenean euismod elementum nisi quis eleifend quam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Congue quisque egestas diam in arcu cursus euismod quis viverra. Magna sit amet purus gravida quis blandit. Pharetra convallis posuere morbi leo urna. Vitae aliquet nec ullamcorper sit amet. Donec et odio pellentesque diam.

Amet aliquam id diam maecenas ultricies mi eget. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ut lectus arcu bibendum at varius vel. Mattis rhoncus urna neque viverra justo nec ultrices. A iaculis at erat pellentesque adipiscing commodo elit at. Vel pharetra vel turpis nunc eget lorem. Amet nisl purus in mollis nunc sed id. Adipiscing diam donec adipiscing tristique risus. Arcu odio ut sem nulla. Pellentesque sit amet porttitor eget. Elit at imperdiet dui accumsan sit amet. At imperdiet dui accumsan sit amet.</h1>
        </div>
    )
}
export function Filtersandlabel(){
    return(
        <div>
            <h1>Labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus. Mi proin sed libero enim sed. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Ut tristique et egestas quis. Cursus eget nunc scelerisque viverra mauris in aliquam. Mollis nunc sed id semper risus. Dignissim sodales ut eu sem integer vitae justo. Nisl purus in mollis nunc sed id semper. Proin fermentum leo vel orci porta. Mi proin sed libero enim. Sagittis orci a scelerisque purus. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Consequat nisl vel pretium lectus quam id. Maecenas pharetra convallis posuere morbi.

Ut eu sem integer vitae justo eget. Sed elementum tempus egestas sed sed risus pretium. Quam viverra orci sagittis eu volutpat. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Amet cursus sit amet dictum. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Arcu non sodales neque sodales ut etiam. Tortor posuere ac ut consequat semper viverra nam. Nec tincidunt praesent semper feugiat nibh sed. Gravida quis blandit turpis cursus. In arcu cursus euismod quis viverra nibh cras. Condimentum id venenatis a condimentum vitae sapien pellentesque. Id consectetur purus ut faucibus pulvinar elementum. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Euismod nisi porta lorem mollis aliquam ut porttitor. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquam id diam maecenas ultricies mi eget mauris. Nisl purus in mollis nunc sed id. Et tortor at risus viverra adipiscing at in tellus integer.

Erat velit scelerisque in dictum non consectetur a erat. Pulvinar elementum integer enim neque volutpat. Mauris in aliquam sem fringilla ut. In nisl nisi scelerisque eu ultrices vitae auctor eu. Etiam non quam lacus suspendisse. Nisl pretium fusce id velit ut tortor pretium. Vel eros donec ac odio tempor. Varius morbi enim nunc faucibus. Ornare suspendisse sed nisi lacus sed viverra tellus. Odio euismod lacinia at quis. Etiam erat velit scelerisque in dictum non consectetur a. Sit amet venenatis urna cursus eget nunc scelerisque. Fusce ut placerat orci nulla pellentesque dignissim enim sit.

Tempor id eu nisl nunc mi ipsum. Sit amet risus nullam eget felis eget nunc. Auctor eu augue ut lectus. Sodales neque sodales ut etiam. Pharetra diam sit amet nisl suscipit. Sollicitudin tempor id eu nisl nunc mi. Condimentum lacinia quis vel eros donec ac odio tempor. Risus in hendrerit gravida rutrum quisque non tellus orci. Cursus turpis massa tincidunt dui ut ornare lectus sit amet. Sed felis eget velit aliquet sagittis id consectetur. Gravida cum sociis natoque penatibus et magnis dis. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Curabitur vitae nunc sed velit dignissim sodales. Congue quisque egestas diam in arcu cursus euismod. Ac auctor augue mauris augue neque gravida. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Aliquet eget sit amet tellus cras.

Augue ut lectus arcu bibendum at. Tortor condimentum lacinia quis vel eros donec ac. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Vitae ultricies leo integer malesuada. Pharetra sit amet aliquam id diam maecenas ultricies. Egestas maecenas pharetra convallis posuere morbi. Tristique senectus et netus et malesuada fames. Suscipit adipiscing bibendum est ultricies integer quis. Lobortis mattis aliquam faucibus purus in massa. Integer quis auctor elit sed vulputate mi sit. Aenean euismod elementum nisi quis eleifend quam. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Congue quisque egestas diam in arcu cursus euismod quis viverra. Magna sit amet purus gravida quis blandit. Pharetra convallis posuere morbi leo urna. Vitae aliquet nec ullamcorper sit amet. Donec et odio pellentesque diam.

Amet aliquam id diam maecenas ultricies mi eget. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Ut lectus arcu bibendum at varius vel. Mattis rhoncus urna neque viverra justo nec ultrices. A iaculis at erat pellentesque adipiscing commodo elit at. Vel pharetra vel turpis nunc eget lorem. Amet nisl purus in mollis nunc sed id. Adipiscing diam donec adipiscing tristique risus. Arcu odio ut sem nulla. Pellentesque sit amet porttitor eget. Elit at imperdiet dui accumsan sit amet. At imperdiet dui accumsan sit amet.</h1>
        </div>
    )
}

import React,{Component} from 'react';
import PlayerPanel from './Panels/PlayerPanel.js'
import EnablePanel from './Panels/EnablePanel.js'
import pic1 from './pics/1.jpg'
import pic2 from './pics/1.jpg'
import pic3 from './pics/1.jpg'
import pic4 from './pics/1.jpg'
import pic5 from './pics/1.jpg'
import pic6 from './pics/1.jpg'
import pic7 from './pics/1.jpg'
import pic8 from './pics/1.jpg'
import pic9 from './pics/1.jpg'
import pic10 from './pics/1.jpg'

//required: import 10 sounds

const picsArray=[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10]
const sounds=["sound 1",'sound 2','sound 3','sound 4','sound 5','sound 6','sound 7','sound 8','sound 9','sound 10']

default export class App extends Component
{
constructor(props)
{
    super(props)
    this.handleDisplayArrayUpdate=this.handleDisplayArrayUpdate.bind(this);

}
render( )
{
    let count=0;
    const mapfunction=(pic)=>
    {

    }
}
}
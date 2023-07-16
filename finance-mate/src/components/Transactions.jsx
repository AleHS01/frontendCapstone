import React,{useEffect,useState} from 'react'
import SideBar from './side-bar'
import { useDispatch,useSelector } from 'react-redux'
import { getTransactionsThunk } from '../redux/user/user.action';
function Transactions() {
    const dispatch = useDispatch();
    const trans = useSelector((state) => state.trans);
    console.log("here",trans);
    useEffect(()=>{
        const fetchTrans=async ()=>{
            const response= dispatch(getTransactionsThunk());
            console.log(response)
        }
        fetchTrans();
    },[])

  return (
    <div className='dashboard'>
        <SideBar></SideBar>
        {trans.data.map((item)=>(
          <div className='content'>
            <h4>Transaction</h4>
            <div><b>Description:</b>{item.name}   <b>Amount</b>:{item.amount}</div>
          </div>
          ))}
    </div>
  )
}

export default Transactions
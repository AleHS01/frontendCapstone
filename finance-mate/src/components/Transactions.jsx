import React,{useEffect,useState} from 'react'
import SideBar from './side-bar'
import { useDispatch,useSelector } from 'react-redux'
import { getTransactionsThunk,fetchUserThunk } from '../redux/user/user.action';
function Transactions() {
    const dispatch = useDispatch();
    const trans = useSelector((state) => state.trans);
    console.log("here",trans);
    const user = useSelector((state) => state.user.user);

    const getUser = async () => {
      try {
        dispatch(fetchUserThunk());
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
        getUser().then(() => dispatch(getTransactionsThunk()));
    }, []);

  //   useEffect(()=>{
  //     if (!user) {
  //       getUser().then(
      
  //         const fetchTrans=async ()=>{
  //             const response= dispatch(getTransactionsThunk());
  //             console.log("fetched Transactions"+response)
  //         }
  //       fetchTrans();})
  //   }
  //  })

  return (
    <div className='dashboard'>
      <SideBar></SideBar>
      <div className='content'>
      {trans && trans.data ? (
        trans.data.map((item) => {
          try {
            return (
              <div >
                <hr></hr>
                <div>
                  <b>Description:</b> {item.name} <br></br><b>Amount:</b> {item.amount}
                </div>
              </div>
            );
          } catch (error) {
            console.error('Error processing transaction:', error);
            // Handle the error here (e.g., show an error message)
            return (
              <div className='content'>
                <h4>Error</h4>
                <div>An error occurred while processing the transaction.</div>
              </div>
            );
          }
        })
      ) : (
        <div className='content'>
          <h4>No Transactions</h4>
          <div>No transaction data available.</div>
        </div>
      )}
å
      </div>
    </div>
  );
  
}

export default Transactions
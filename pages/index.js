import { useState,useEffect } from 'react'; 

import Card from '../components/Card'
import Header from '../components/header'
import LoginModal from '../components/Modals/Login'
import RegisterModal from '../components/Modals/Register'

import InfiniteScroll from 'react-infinite-scroller';
import ScrollToTop from '../components/ScrollToTop'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)

import { getAllPosts } from '../lib/api'
import { useAuthLogin } from '../utils/auth'


export default function Index() {
    const [item, setItem] = useState([])
    const [user, setUser] = useState({})
    const [page, setPage] = useState(1)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [isLoginOpen, setIsLoginOpen] = useState(false);
 
  const togglePopup = () => {
    setIsLoginOpen(!isLoginOpen);
  }

    useEffect( async () => {

      cekAuthSession()
      fetchMoreData(page)
      
  },[])

  const cekAuthSession = () => {
    const auth = sessionStorage.getItem('auth')
    if (auth != null) {
      // console.log(JSON.parse(auth))
      setUser(JSON.parse(auth))
      setIsLoggedIn(true)
      return true
    }else{
      return false
    }
  };

  async function fetchData(id){
    
  let data = await getAllPosts(id)
      setItem(data)
      setLoading(false)
  }

   async  function fetchMoreData()  {
    let data = await getAllPosts(page)
    const newData = [...item, ...data];
    setItem(newData);
    setPage(page + 1)

    //console.log(newData)
    // setTimeout(() => {
      // setItem(newData);
    // }, 2000);
  }

 async function postLogin () {
 
   let login = await useAuthLogin("hajidalakhtar@gmail.com","akurapopo1502")
    setUser(login[0])
    setIsLoginOpen(!isLoginOpen);

  }



  return (
    <>
   <Header  handleClick={togglePopup} avatar_url={user.avatar_url}/>
    
      {isLoginOpen && <LoginModal
      handleLogin={postLogin}
      handleClose={togglePopup}
    />}

     {/* {isOpen && <PopupRegister
      handleLogin={postLogin}
      handleClose={togglePopup}
    />} */}

    
   {/* <LoginModal/> */}
   
      <ScrollToTop />
      <InfiniteScroll
      className="container  mt-10"
        initialLoad={false}
        loadMore={fetchMoreData}
        hasMore={true}
        loader={(
          <h1>Loading...</h1>
        )}
      >
        {item.map((data,i) => (
          <Card title={data.title} thumbnail={data.thumnail} created_at={data.created_at} link={data.link} categories={data.categories}  />
          ))}

      </InfiniteScroll>

 
    {/* {loading ? "tess": item.map(data => {
          return <Card title={data.title} thumbnail={data.thumnail} pubDate={data.pubDate} link={data.link}/>;
        })
    } 
        */}

       
    </>
  )
}

// export async function getStaticProps() {
//   const allPosts = 

//   return {
//     props: { allPosts },
//   }
// }

import React,{useEffect,useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import {Sidebar} from 'flowbite-react'
import {HiAnnotation, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiUser} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { signoutSuccess } from '../redux/user/userSlice'
import { useSelector } from 'react-redux'

const DashSidebar = () => {
    const location=useLocation()
  const [tab,setTab]=useState('')
  const {currentUser}=useSelector(state => state.user);

  useEffect(()=>{
     const urlParams=new URLSearchParams(location.search)
     const tabFromUrl=urlParams.get('tab')
     if(tabFromUrl)setTab(tabFromUrl)
  },[location.search])

  const dispatch=useDispatch()
    const handleSignout=async()=>{
      try {
          const res=await fetch('/api/user/signout',{
              method:'POST',
          });
          const data=res.json();
          if(!res.ok){
              console.log(data.message);
          }else{
              dispatch(signoutSuccess());
          }
      } catch (error) {
          console.log(error.message);
          
      }
  }
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
                <Link to='/dashboard?tab=profile'>
                <Sidebar.Item active={tab=='profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin':'User'} labelColor='dark' as='div'>
                    Profile
                </Sidebar.Item>
                {currentUser.isAdmin && (
                     <Link to='/dashboard?tab=posts'>
                      <Sidebar.Item active={tab==='posts'} icon={HiDocumentText} as='div'>
                         Posts
                      </Sidebar.Item>
                    </Link>
                    
                )}

                {currentUser.isAdmin && (
                    <>
                     <Link to='/dashboard?tab=users'>
                      <Sidebar.Item active={tab==='posts'} icon={HiOutlineUserGroup} as='div'>
                         Users
                      </Sidebar.Item>
                    </Link>
                      <Link to='/dashboard?tab=comments'>
                      <Sidebar.Item active={tab==='comments'} icon={HiAnnotation} as='div'>
                         Comments
                      </Sidebar.Item>
                    </Link>
                    </>
                  )}
               
                <Sidebar.Item icon={HiArrowSmRight} className='cursor-pointer' as='div' onClick={handleSignout}>
                    Sign out
                </Sidebar.Item>
                </Link>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar

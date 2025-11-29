import ProfileLayout from "../../layout/ProfileLayout";
import EditProfileModal from "../../components/modal/profile/EditProfileModal";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ProfileSkeleton from "../../components/loading/profile/ProfileSkeleton";
import { useParams } from "react-router-dom";
import ErrorPage from "./../error/ErrorPage";

export default function Profile() {
    const {uid} = useParams()

    const fetchUserData = async (uid) => {
        const res = await axios.get(`https://dummyjson.com/users/${uid}`)
        return res.data
    }
    const {data : userData, isLoading : userDataLoading, error : userError, isError : isUserError}= useQuery({
        queryKey : ['userData', uid ],
        queryFn : () => fetchUserData(uid),
        retry : false
    })

    const fetchUserPostData = async () => {
        const res = await axios.get(`https://dummyjson.com/recipes?limit=12`)
        return res.data.recipes
    }
    const {data : userPostData, isLoading : userPostDataLoading} = useQuery({
        queryKey : ['userPostData'],
        queryFn : fetchUserPostData,
    })
  
    return (
        <div> 
            {userDataLoading ? 
                <ProfileSkeleton/>
                :
                isUserError ? 
                    <ErrorPage statusCode={userError?.status}/>
                    :
                    <ProfileLayout 
                        userPostData={userPostData} 
                        userData={userData} 
                        userPostDataLoading={userPostDataLoading}
                    />
            }
            <EditProfileModal/>
        </div>
    )
}
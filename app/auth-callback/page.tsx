import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import {useEffect } from "react";
const AuthCallback = () => {
  const {isLoaded,user}=useUser()
  useEffect(() => {
    const syncUser=async()=>{
      try {
        if(!isLoaded || !user) return // return of clerk is not loaded or user is not logged in
        
      } catch (error) {
        
      }finally{

      }
    }
    syncUser();
  })
  return (
    <div className="h-screen w-full bg-black flex items-center  justify-center">
      <Card className="w-[90%] max-w-md bg-zinc-900 border border-zinc-800">
        <CardContent className="flex flex-col items-center gap-4 pt-6">
          <Loader className="size-6 bg-emerald-500 animate-spin"></Loader>
          <h3 className="text-zinc-400 text-xl font-bold">Logging you in</h3>
          <p className="text-zinc-400 text-sm">...Redirecting</p>
        </CardContent>
      </Card>
    </div>
  );
};
export default AuthCallback;

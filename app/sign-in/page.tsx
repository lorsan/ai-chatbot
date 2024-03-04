import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import { redirect } from 'next/navigation'



export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    //  Big Header, title, subtitile and login button.
<div className="flex min-h-screen bg-white justify-center items-center">
  <div className="session flex flex-col sm:flex-row rounded-lg shadow-md m-8">
    {/* Imposta l'immagine come cover sia in modalità mobile che desktop */}
    <div className="left w-full h-64 bg-center bg-cover rounded-t-lg sm:w-64 sm:h-auto sm:rounded-l-lg sm:rounded-tr-none" style={{ backgroundImage: "url('/indianbot.png')" }}></div>

    <div className="log-in flex flex-col items-center sm:items-start bg-white p-8 sm:p-16 md:p-32 w-full">
      <h4 className="font-semibold text-xl sm:text-2xl mb-2">
        Ciao sono <span className="font-bold">SIBILLA 🤠</span>
      </h4>
      <p className="text-base sm:text-lg text-gray-600 mb-4 sm:text-left">
        
      I'm Sibilla, your AI-powered virtual guide fluent in 25 languages, here to enrich your exploration of museums, exhibitions, and historical sites with detailed information and captivating stories. I tailor recommendations to your interests, transforming cultural outings into unforgettable experiences. Register now and embark on a global cultural journey with me.
      </p>
      <LoginButton className="bg-purple-200 text-purple-700 font-semibold py-2 sm:py-3 px-4 rounded-lg shadow-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-md sm:text-lg" />
    </div>
  </div>
</div>


  )
}

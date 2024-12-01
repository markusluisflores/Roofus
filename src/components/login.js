import { useUserAuth } from "@/_utils/auth-context";
import Image from "next/image";
import googleIcon from './../assets/icons/google.png';
import githubIcon from './../assets/icons/github.png';


export default function Login({ closeLoginModal }) {

    const { gitHubSignIn, googleSignIn } = useUserAuth();

    async function handleGithubSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
        closeLoginModal();
    }

    async function handleGoogleSignIn() {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
        closeLoginModal();
    }

    return (
        <div
            onClick={closeLoginModal}
            className="fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-gray-950/70"
        >
            <div
                onClick={(event) => { event.stopPropagation() }}
                className="bg-white px-10 pb-10 rounded max-w-md text-black"
            >
                <div
                    onClick={closeLoginModal}
                    className="
                        text-sm
                        text-center 
                        h-5 w-5 
                        mr-0 ml-auto mt-5
                        text-gray-400 
                        hover:shadow-md cursor-pointer
                    "
                >
                    &#10006;
                </div>
                <div className="text-2xl text-center font-semibold text-brandRed">
                    Login
                </div>
                <div
                    type="button"
                    onClick={handleGoogleSignIn}
                    className="text-lg text-black rounded px-6 py-4 mt-4 border-2 flex hover:shadow-md cursor-pointer"
                >
                    <Image
                        src={googleIcon}
                        width={25}
                        height={25}
                        alt="Google Icon"
                        className="mr-3"
                    />
                    Sign In with Google
                </div>
                <div
                    type="button"
                    onClick={handleGithubSignIn}
                    className="text-lg text-black rounded px-6 py-4 mt-4 border-2 flex hover:shadow-md cursor-pointer"
                >
                    <Image
                        src={githubIcon}
                        width={25}
                        height={25}
                        alt="Github Icon"
                        className="mr-3"
                    />
                    Sign In with GitHub
                </div>
            </div>
        </div>
    );
}
import BackgroundBeamsWithCollisionDemo from "@/components/example/background-beams-with-collision-demo";
import RegistrationForm from "@/components/RegistrationForm";

export default function Register() {
    return (
        <div className="w-full">
            <div className="w-full">
                <BackgroundBeamsWithCollisionDemo />
            </div>
            <div className="w-full">
                <RegistrationForm />
            </div>
        </div>
    );
};
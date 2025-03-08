import { FaFacebook, FaGoogle } from "react-icons/fa6";

export default function SocialLogin() {
    return (
        <div className="d-md-flex justify-content-between">
            <button className="ud-btn btn-fb fz14 fw400 mb-2 mb-md-0" type="button"><FaFacebook /> Continue Facebook</button>
            <button className="ud-btn btn-google fz14 fw400 mb-2 mb-md-0" type="button"><FaGoogle /> Continue Google</button>
        </div>
    )
}
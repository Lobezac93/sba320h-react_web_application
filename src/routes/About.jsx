import NavBar from "../components/NavBar"
import Preview from "../components/Preview"
import aboutimg from "../assets/soya.avif"
export default function About(){
    return(
        <>
            <NavBar />
            <Preview
                cName="preview-about"
                previewImg={aboutimg}
                title="About"
                btnText= "Travel Plan"
                url = "/"
                btnClass="hide"
            />
        </>
    )
}
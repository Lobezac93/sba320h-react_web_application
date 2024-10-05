import NavBar from "../components/NavBar"
import Preview from "../components/Preview"
import ServiceImg from "../assets/city.avif"
export default function Service() {
    return(
        <>
            <NavBar />
            <Preview
                cName="preview-about"
                previewImg={ServiceImg}
                title="Contact"
                btnText= "Travel Plan"
                url = "/"
                btnClass="hide"
            /> 
        </>
    )
}
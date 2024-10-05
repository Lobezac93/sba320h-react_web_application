import NavBar from "../components/NavBar";
import Preview from "../components/Preview";

export default function Home() {
    return (
        <>
            <NavBar />
            <Preview
                cName="preview"
                previewImg="https://images.unsplash.com/photo-1659947234279-92bc8f2cd2fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyb29uJTIwbmF0dXJlfGVufDB8fDB8fHww"
                title="Explore Cameroun"
                text="Discover the rich culture and beautiful landscapes."
                btnText= "Travel Plan"
                url = "/"
                btnClass="show"
            />
            <h1>This is home</h1>
        </>
    );
}

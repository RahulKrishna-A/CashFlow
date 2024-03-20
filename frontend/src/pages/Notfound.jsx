import notFoundImg from "../assets/404page.svg"


export default function  Notfound(){
    return(
        <div className={" h-[100dvh] w-[100dvw] flex justify-center items-center"}>

                {/*hiisadasdsa*/}
                    <img className={"h-[80vh] w-[60vw]"}  src={notFoundImg} alt={"Not found"}/>

        </div>
)
}
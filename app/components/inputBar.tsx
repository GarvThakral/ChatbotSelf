export default function InputBar(){
    return (
        <div className = {"h-[15%] w-full flex items-center justify-center"}>
            <input placeholder="Enter your input here" className = {'w-[70%]'}></input>
            <button>Send</button>
        </div>
    )
}
export const Balance = ({value}) => {
    return <div className="flex ">
        <div className="font-bold text-2xl">
            Your balance
        </div>
        <div className="font-semibold text-2xl ml-4 ">
            $ {value}
        </div>
    </div>
}
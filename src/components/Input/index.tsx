type InputProps = {
    /** Type attr of input */
    type: string;
    /** Text title of the input */
    placeholder: string;
}
export const Input = ( props: object) => {
    return (
        <input {...props.register(props.type)} type={props.type} placeholder={props.placeholder} />
    );
}

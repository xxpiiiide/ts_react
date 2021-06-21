import React, {useState} from "react"


type MyFormProps = {
    onSubmit: (form: { name: string; description: string}) => void;
}

function MyForm({onSubmit}: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const {name, description} = form;

    // const onChange:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    //     const {name, value} = e.target;
    //     setForm({
    //         ...form,
    //         [name]: value
    //     })
    // }
    //  위 코드와 아래코드는 동일한 코드이다.
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // e값을 무엇으로 설정해야할까? 아직 모를 때에는 any로 설정하나 e객체의 타입을 외울 필요는 없이 onChange에 올리면 알 수 있다.
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        // e값을 아직 모를 때 any로 설정한다. e객체의 타입 외울 필요 없이 onSubmit에 올리면 알 수 있다.
        e.preventDefault();
        onSubmit(form);
        setForm({
            name:'',
            description:''
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />  
            <input name='description' value={description} onChange={onChange} />
            <button>등록</button>
        </form>
    )
}

export default MyForm
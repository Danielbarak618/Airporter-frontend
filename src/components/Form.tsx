import React,{useState} from 'react'



const Form = ({submitData}:{submitData:Function}) => {
    const [formData , setFormData] = useState<{icoa24:string , date:string , time:string}>({icoa24:'' , date:'' , time:''})


    const handleSubmit = (e:React.FormEvent<EventTarget>) => {
        e.preventDefault()
        submitData(formData)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='Icoa24'>
            <input type='text'
             value={formData.icoa24}
             onChange={(e) => setFormData({...formData , icoa24:e.target.value})}
             />
             </label>
            <label htmlFor='Date'>
            <input type='date'
             value={formData.date}
             onChange={(e) => setFormData({...formData , date:e.target.value})}
             />
             </label>
            <label htmlFor='Time'>
            <input type='time'
             value={formData.time}
             onChange={(e) => setFormData({...formData , time:e.target.value})}
             />
             </label>
                <button type='submit'>Submit</button>
        </form>
    )
}

export default Form

import React from 'react';
import '../scss/form.scss';

class Form extends React.Component{
    handleChange=(e)=>{
        const nam = e.target.name;
        const val = e.target.value;
        this.props.onHandleChange(nam, val)
    }

    render(){
        return(
            <div className='form__section' >
            <form className='form' onSubmit={this.props.handleSend} >
            <h2 className='form__title'>add new employee</h2>
             <div className='form__body'>
               <div className='form__input'>
                   <label className='form__label' htmlFor='username'>Username : </label>
                   <input className='form__textBox' type='text' name='username' id='username' onChange={this.handleChange} required autoFocus/>
               </div>
               <div className='form__input'>
                   <label className='form__label' htmlFor='name'>Name : </label>
                   <input className='form__textBox' type='text' name='name' id='name' onChange={this.handleChange} required/>
               </div>
               <div className='form__input'>
                   <label className='form__label' htmlFor='email'>Email : </label>
                   <input className='form__textBox' type='text' name='email' id='email' onChange={this.handleChange} required/>
               </div>
                   <input className='form__btn-add' type='submit' value='ADD'/>
             </div>
               </form>
            </div>
        )
    }
    
}

export default Form;
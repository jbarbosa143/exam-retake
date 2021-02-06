import React from 'react';

const Form = props =>{
    return(
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <form onSubmit ={props.onSubmitHandler}>
                    <div className="form-group">
                        <label>Pet Name:</label>
                        <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value ={props.form.name}/>
                        {
                            props.error.name ?
                                <span className="text-danger">{props.error.name.message}</span>
                                    : ""
                        }
                    </div>
                    <div className="form-group">
                        <label>Pet Type:</label>
                        <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value ={props.form.type}/>
                        {
                            props.error.name ?
                                <span className="text-danger">{props.error.type.message}</span>
                                    : ""
                        }
                    </div>
                    <div className="form-group">
                        <label>Pet Description:</label>
                        <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value ={props.form.description}/>
                        {
                            props.error.name ?
                                <span className="text-danger">{props.error.description.message}</span>
                                    : ""
                        }
                    </div>
                    <div className="form-group">
                        <label>Skill 1:</label>
                        <input type="text" name="skillOne" className="form-control" onChange={props.onChangeHandler} value ={props.form.skillOne}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 2:</label>
                        <input type="text" name="skillTwo" className="form-control" onChange={props.onChangeHandler} value ={props.form.skillTwo}/>
                    </div>
                    <div className="form-group">
                        <label>Skill 3:</label>
                        <input type="text" name="skillThree" className="form-control" onChange={props.onChangeHandler} value ={props.form.skillThree}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-info"/>
                </form>
            </div>
            <div className="col-sm-2"></div>
        </div>
    )
}
export default Form;
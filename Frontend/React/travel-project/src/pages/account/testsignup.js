// export default function SignUp() {
 
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [confirmPassword,setConfirmPassword] = useState("");

//     const [confirmPasswordClass, setConfirmPasswordClass] = useState('form-control');
//     const [isConfirmPasswordDirty, setIsConfirmPasswordDirty] = useState(false);
//     const [passwordShown, setPasswordShown] = useState(false);
//     const [emailError, setShowEmailError] = useState(false);
//     const [showErrorMessage, setShowErrorMessage] = useState(false);
//     const [change, setChange] = useState(true);
//     const [shortPassword, setShortPassword] = useState(false);

//     const onChecked = () => {
//         setChange(!true)
//     }

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value) 
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }
//     }

//     const handleSubmit  = () => {
//         let obj = {
//             firstName : firstName,
//             lastName:lastName,
//             email:email,
//             password:password,
//             confirmPassword:confirmPassword,
//         }
        
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
        
//         setTimeout(() => {
//             window.location.reload(true);
//         }, 1000)


//         const newPostKey = push(child(ref(database), 'posts')).key;
//         const updates = {};
//         updates['/' + newPostKey] = obj
//         return update(ref(database), updates);  
//     }
    
//     const handlePassword = (e) => {
//         setConfirmPassword(e.target.value);
//         setIsConfirmPasswordDirty(true);
//     }

//     useEffect(() => {
//         if(isConfirmPasswordDirty) {
//             if(password === confirmPassword) {
//                 setShowErrorMessage(false);
//                 setConfirmPasswordClass('form-control is-valid')
//             } else {
//                 setShowErrorMessage(true);
//                 setConfirmPasswordClass('form-control is-invalid')
//             }
//         }
//     }, [confirmPassword])

    
//     const onEmailCheck = (e) => {
//         const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
//         if(e.target?.value && e.target.value.match(isValidEmail)) {
//             setShowEmailError(false)
//         } else {
//             setShowEmailError(true)
//         }
//     }
//     const onPassCheck = (e) => {
//         const isValidPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
//         if(e.target?.value && e.target.value.match(isValidPassword)) {
//             setShortPassword(false);
//         } else {
//             setShortPassword(true);
//         } 
//     }

//     const togglePassword = () => {
//         setPasswordShown(!passwordShown);
//       };

//     const reg_email = () => ({type: "USER_EMAIL"});
//     const reg_password = () => ({type: "USER_PASSWORD"});
    
//     // const loginUserSuccess = (dispatch, user) => {
//     //     dispatch({
//     //       type: LOGIN_USER_SUCCESS,
//     //       payload: user
//     //     });
//     // }

//     // const createUserFail = (dispatch) => {
//     //     dispatch({
//     //         type: CREATE_USER_FAIL
//     //     })
//     // };

    // return (
    //     <>
    //         <h3>Создать аккаунт</h3>
    //         <div className="registration-form">
    //             <div className="username">
    //                 <label id="fname" htmlFor="firstName"></label>
    //                 <input id="firstName" required="required" value={firstName} onChange = {(e) => handleInputChange(e)} placeholder="Имя" type="text"></input>
    //             </div>
    //             <div className="lastname">
    //                 <label id="lname" htmlFor="lastName"></label>
    //                 <input id="lastName" value={lastName} onChange = {(e) => handleInputChange(e)} placeholder="Фамилия" type="text"></input>
    //             </div>
    //             <div className="email-address">
    //                 <label id="eml" htmlFor="email"></label>
    //                 <input id="email" value={email} onBlur={onEmailCheck} required="required" onChange = {(e) => handleInputChange(e)} placeholder="E-mail" type="email"></input>
    //             </div>
                
    //             <div className="passw">
    //                 <label id="pss" htmlFor="password"></label>
    //                 <input id="password" onBlur={onPassCheck} 
    //                         className={confirmPasswordClass} 
    //                         value={password} onChange = {(e) => handleInputChange(e)} placeholder="Пароль" type={passwordShown ? "text" : "password"}></input>
    //             </div>
                
    //             <div className="conf-passw">
    //                 <label id="confpss" htmlFor="confirmPassword"></label>
    //                 <input id="confirmPassword" className={confirmPasswordClass} value={confirmPassword} onChange = {(e) => handlePassword(e)} placeholder="Подтвердить пароль" type={passwordShown ? "text" : "password"}></input>
    //             </div>
    //             <p><input id="showpass" onChange={togglePassword}  type="checkbox"></input>
    //             <span className="">Показать пароль</span></p>
                

    //             {emailError ? <p className="signal_msg">! Неверный email</p> : ''}

    //             {shortPassword ? <p className="signal_msg">! Пароль должен быть не менее 8 символов и содержать буквы, заглавную букву, цифры и знаки</p> : ''}
                
    //             {showErrorMessage && isConfirmPasswordDirty ? <p className="signal_msg">! Пароль не совпадает </p> : ''}

    //             <p><input id="checked" onChange={onChecked}  className="agree-checkbox"  type="checkbox"></input>
    //             <span className="agree">Я принимаю условия о регистрации указанные в 
    //             <a href="#"> Cоглашении о регистрации</a></span></p>
    //             <p id="ifNotChecked"></p>
    //             <button id="register-me" disabled={change} type="submit" onClick={function(e) {handleSubmit()}} 
    //             className="btn btn-link create_account_btn">Сохранить</button>
                
    //         </div>
    //     </>
    // )
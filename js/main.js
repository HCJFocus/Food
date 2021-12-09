let validateForms = function(selector, rules){
    new window.JustValidate(selector,{
        rules: rules,
        submitHandles: function(form){
            let data = FormData(form);
        }
    })
}
validateForms('.sub__box-form', {email: {required: true, email:true}, tel: {required: true}});
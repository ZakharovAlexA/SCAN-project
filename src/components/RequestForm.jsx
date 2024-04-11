import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import '../styles/RequestForm.css';

function RequestForm() {
    const {
        control,
        register,
        formState: { errors, isValid },
        handleSubmit,
        watch,
    } = useForm({
        mode: 'onBlur',
    });

    const startDate = watch('StartDate');
    const navigate = useNavigate();

    const validateInn = (inn, error) => {
        var result = false;
        if (typeof inn === 'number') {
            inn = inn.toString();
        } else if (typeof inn !== 'string') {
            inn = '';
        }
        if (!inn.length) {
            error.code = 1;
            error.message = 'ИНН пуст';
        } else if (/[^0-9]/.test(inn)) {
            error.code = 2;
            error.message = 'ИНН может состоять только из цифр';
        } else if ([10, 12].indexOf(inn.length) === -1) {
            error.code = 3;
            error.message = 'ИНН может состоять только из 10 или 12 цифр';
        } else {
            var checkDigit = function (inn, coefficients) {
                var n = 0;
                for (var i in coefficients) {
                    n += coefficients[i] * inn[i];
                }
                return parseInt((n % 11) % 10);
            };
            switch (inn.length) {
                case 10:
                    var n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9])) {
                        result = true;
                    }
                    break;
                case 12:
                    var n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    var n12 = checkDigit(
                        inn,
                        [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
                    );
                    if (
                        n11 === parseInt(inn[10]) &&
                        n12 === parseInt(inn[11])
                    ) {
                        result = true;
                    }
                    break;
            }
            if (!result) {
                error.code = 4;
                error.message = 'Неправильное контрольное число';
            }
        }
        return result;
    };

    const onSubmit = (data) => {
        console.log(data);
        navigate('/resultpage', { state: { data } });
    };

    return (
        <div>
            <form
                className='reqFormContainer'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='regFormTextContainer'>
                    <label className='inputFormLabel'>ИНН компании *</label>
                    <input
                        className={
                            errors.inn ? 'inputFormTextError' : 'inputFormText'
                        }
                        {...register('inn', {
                            required: true,
                            validate: { validateInn },
                        })}
                        placeholder='10 цифр'
                    />
                    <div className='reqErrorMassege'>
                        {errors.inn?.type === 'required' &&
                            'Введите корректные данные'}
                        {errors.inn?.type === 'validateInn' &&
                            'Введите корректные данные'}
                    </div>
                    <label className='inputFormLabel'>Тональность:</label>
                    <select
                        className='inputFormTextSelect'
                        {...register('tonality')}
                    >
                        <option value='any'>Любая</option>
                        <option value='positive'>Позитивная</option>
                        <option value='negative'>Негативная</option>
                    </select>
                    <label className='inputFormLabel'>
                        Количество документов в выдаче *
                    </label>
                    <input
                        className={
                            errors.limit
                                ? 'inputFormTextError'
                                : 'inputFormText'
                        }
                        {...register('limit', {
                            required: true,
                            min: 1,
                            max: 1000,
                        })}
                        placeholder='От 1 до 1000'
                    />
                    <div className='reqErrorMassege'>
                        {errors.limit?.type === 'required' &&
                            'Обязательное поле'}
                        {(errors.limit?.type === 'min' ||
                            errors.limit?.type === 'max') &&
                            'Введите корректные данные'}
                    </div>
                    <label className='inputFormLabel'>Диаппазон поиска *</label>
                    <div className='datePickerFrame'>
                        <Controller
                            control={control}
                            name='StartDate'
                            rules={{ required: true }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <div>
                                    <DatePicker
                                        dateFormat='dd-MM-yyyy'
                                        selectsStart
                                        onBlur={onBlur}
                                        selected={value}
                                        onChange={onChange}
                                        maxDate={new Date()}
                                        placeholderText='Дата начала'
                                        className={
                                            errors.StartDate
                                                ? 'react-datepickerErrors'
                                                : 'react-datepickerInput-container'
                                        }
                                    />
                                </div>
                            )}
                        />
                        <Controller
                            control={control}
                            name='EndDate'
                            rules={{ required: true }}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <div>
                                    <DatePicker
                                        dateFormat='dd-MM-yyyy'
                                        selectsEnd
                                        selected={value}
                                        onBlur={onBlur}
                                        onChange={onChange}
                                        maxDate={new Date()}
                                        minDate={startDate}
                                        placeholderText='Дата конца'
                                        className={
                                            errors.EndDate
                                                ? 'react-datepickerErrors'
                                                : 'react-datepickerInput-container'
                                        }
                                    />
                                </div>
                            )}
                        />
                    </div>
                    <div className='errorMassege'>
                        {(errors.StartDate?.type === 'required' ||
                            errors.EndDate?.type === 'required') &&
                            'Обязательное поле'}
                    </div>
                </div>
                <div className='inputFormCheck'>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('maxFullness')}
                            id='maxFullness'
                            type='checkbox'
                        />
                        <label htmlFor={'maxFullness'}>
                            Признак максимальной полноты
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('inBusinessNews')}
                            id='inBusinessNews'
                            type='checkbox'
                        />
                        <label htmlFor='inBusinessNews'>
                            Упоминания в бизнес-контексте
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('mainRoleInNews')}
                            id='mainRoleInNews'
                            type='checkbox'
                        />
                        <label htmlFor='mainRoleInNews'>
                            Главная роль в публикации
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('onlyWithRiskFactors')}
                            id='onlyWithRiskFactors'
                            type='checkbox'
                        />
                        <label htmlFor='onlyWithRiskFactors'>
                            Публикации только с риск-факторами
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('includeTechnikNews')}
                            id='includeTechnikNews'
                            type='checkbox'
                        />
                        <label htmlFor='includeTechnikNews'>
                            Включать технические новости рынков
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('includeAnnounces')}
                            id='includeAnnounces'
                            type='checkbox'
                        />
                        <label htmlFor='includeAnnounces'>
                            Включать анонсы и календари
                        </label>
                    </div>
                    <div className='inputFormCheckLine'>
                        <input
                            {...register('includeDigests')}
                            id='includeDigests'
                            type='checkbox'
                        />
                        <label htmlFor='includeDigests'>
                            Включать сводки новостей
                        </label>
                    </div>
                </div>
                <div>
                    <button
                        type='submit'
                        className={
                            isValid
                                ? 'searcheFormButton'
                                : 'searcheFormButton searcheFormButtonDisabled '
                        }
                        disabled={!isValid}
                    >
                        Поиск
                    </button>
                    <p className='requiredField'>
                        * Обязательные к заполнению поля
                    </p>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;

import React, { useState } from 'react';

const AddTasks = ({ addTask }) => {
    const [name, setName] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [done, setDone] = useState(false);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!name) return alert('Adicione uma tarefa nova');

        addTask({ name, createdAt, done });

        setName('');
        setCreatedAt('');
        setDone(false);
    }

    return (
        <form className="add-form" onSubmit={handleSubmitForm}>
            <div className="form-control">
                <label>Tarefa</label>
                <input
                    type="text" 
                    placeholder="Nova Tarefa" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div className="form-control">
                <label>Data/Hora</label>
                <input
                    type="date" 
                    placeholder="Data/Hora" 
                    value={createdAt} 
                    onChange={(e) => setCreatedAt(e.target.value)} 
                />
            </div>
            <div className="form-control-checkbox">
                <input
                    type="checkbox" 
                    id="check" 
                    checked={done} 
                    value={done} 
                    onChange={(e) => setDone(e.currentTarget.checked)}
                />
                <label htmlFor="check">Tarefa Concluída?</label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="submit" value="Enviar" className="btn btn-block" handletask={addTask} style={{ backgroundColor: 'rgba(0,150,52,0.5)' }}/>
            </div>
        </form>
    )
}
export default AddTasks;
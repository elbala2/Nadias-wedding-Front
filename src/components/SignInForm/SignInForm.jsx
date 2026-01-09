import { useState } from 'react';
import styles from './SignInForm.module.css';

export default function SignInForm() {
  const [acompanantes, setAcompanantes] = useState([]);

  return (
    <article className={styles.container}>
      <section className={styles.signinform}>
        <header className={styles.header}>
          <h2>Confirma tu asistencia</h2>
        </header>
        <form className={styles.form} action="">
          <label>
            <p className={styles.label}>Nombre</p>
            <input
              type="text"
              placeholder="--"
              className={styles.input}
              required
            />
          </label>
          {/* Inputs principales - siempre visibles */}

          <label>
            <p className={styles.label}>Email</p>
            <input
              type="email"
              placeholder="--"
              className={styles.input}
              required
            />
          </label>

          <label>
            <p className={styles.label}>Teléfono</p>
            <input
              type="tel"
              placeholder="--"
              className={styles.input}
              required
            />
          </label>

            <button
              type="button"
              onClick={() => setAcompanantes(prev => [...prev, { nombre: '', email: '', telefono: '' }])}
              className='text-sm text-primary-600 border hover:bg-primary-200 transition-all duration-300 border-primary-200 rounded-md px-2 py-1'
            >
              + Añadir acompañante
            </button>

          {/* Cajas dinámicas de acompañantes */}
          {acompanantes.map((acompanante, index) => (
            <div key={index} className={styles.acompananteBox}>
              <h3 className={styles.acompananteTitle}>Acompañante {index + 1}</h3>
              <label>
                <p className={styles.label}>Nombre</p>
                <input
                  type="text"
                  placeholder="--"
                  value={acompanante.nombre}
                  onChange={(e) => setAcompanantes(acompanantes.map((a, i) => i === index ? { ...a, nombre: e.target.value } : a))}
                  className={styles.input}
                  required
                />
              </label>
              <label>
                <p className={styles.label}>Email</p>
                <input
                  type="email"
                  placeholder="--"
                  value={acompanante.email}
                  onChange={(e) => setAcompanantes(acompanantes.map((a, i) => i === index ? { ...a, email: e.target.value } : a))}
                  className={styles.input}
                  required
                />
              </label>
              <label>
                <p className={styles.label}>Teléfono</p>
                <input
                  type="tel"
                  placeholder="--"
                  value={acompanante.telefono}
                  onChange={(e) => setAcompanantes(acompanantes.map((a, i) => i === index ? { ...a, telefono: e.target.value } : a))}
                  className={styles.input}
                  required
                />
              </label>
              <footer className='flex justify-end'>
                <button
                  type="button"
                  onClick={() => setAcompanantes(acompanantes.filter((_, i) => i !== index))}
                  className='text-sm text-primary-600 border hover:bg-primary-200 transition-all duration-300 border-primary-200 rounded-md px-2 py-1'
                >
                  Eliminar acompañante
                </button>
              </footer>
              
            </div>
          ))}

          <footer className={styles.footer}>
            <button
              type="button"
              className={styles.notGoing}
            >
              No voy a asistir
            </button>
            <button
              type="submit"
              className={styles.going}
            >
              Confirmo asistencia
            </button>
          </footer>
        </form>
      </section>
    </article>
  );
}


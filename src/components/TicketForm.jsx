import { useState } from "react";

const TicketForm = () => {

	//ticketDefault potrà tornare utile anche quando dovrete resettare il form ;)
	//nota: i campi sono inizializzati tutti a "null", va corretto!
	const ticketDefault = {
		name: "",
		language: "",
		urgency: "",
		updates: false,
		description: "",
	};
	//Potete agganciare questo state ai controlli del form ;)
	const [ticketData, setTicketData] = useState(ticketDefault);

	//Potete agganciare questa funzione a un input per iniziare a testare
	function handleForm(event) {
		const name = event.target.name;
		const value = event.target.value;

		if (event.target.type === "checkbox") {
			setTicketData({
				...ticketData,
				[name]: event.target.checked
			})
		} else {
			setTicketData({
				...ticketData,
				[name]: value
			})
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log(ticketData);
	}

	return (
		<div className="container mt-4">
			<h2>Richiesta apertura Ticket</h2>
			<div className="p-4 border rounded bg-light">

				<form onSubmit={handleSubmit}>

					{/* Nome */}
					<div className="mb-3">
						<label className="form-label">Nome</label>
						<input
							type="text"
							name="name"
							className="form-control"
							onChange={handleForm}
							required
						/>
					</div>

					{/* Selezione linguaggio */}
					<div className="mb-3">
						<label className="form-label">Linguaggio di programmazione</label>

						<select
							name="language"
							className="form-select"
							onChange={handleForm}
						>
							<option value="HTML">HTML</option>
							<option value="CSS">CSS</option>
							<option value="JS">JavaScript</option>
							<option value="React">React</option>
							<option value="Express">Express</option>
							<option value="SQL">SQL</option>
						</select>
					</div>

					{/* Radio Urgenza */}
					<div className="mb-3">
						<label className="form-label">Livello di urgenza</label>
						<div>
							<div className="form-check">
								<input
									type="radio"
									name="urgency"
									value="low"
									id="urgencyLow"
									className="form-check-input"
									onChange={handleForm} />
								<label className="form-check-label" htmlFor="urgencyLow">Bassa</label>
							</div>
							<div className="form-check">
								<input
									type="radio"
									name="urgency"
									value="medium"
									id="urgencyMedium"
									className="form-check-input"
									onChange={handleForm} />
								<label className="form-check-label" htmlFor="urgencyMedium">Media</label>
							</div>
							<div className="form-check">
								<input
									type="radio"
									name="urgency"
									value="high"
									id="urgencyHigh"
									className="form-check-input"
									onChange={handleForm} />
								<label className="form-check-label" htmlFor="urgencyHigh">Alta</label>

							</div>
						</div>
					</div>

					{/* Checkbox aggiornamenti */}
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							name="updates"
							id="updates"
							className="form-check-input"
							onChange={handleForm} />
						<label className="form-check-label" htmlFor="updates">Ricevi aggiornamenti sulla richiesta</label>

					</div>

					{/* Descrizione problema */}
					<div className="mb-3">
						<label className="form-label">Descrizione del problema</label>
						<textarea
							name="description"
							className="form-control"
							rows="4"
							required
							onChange={handleForm} />

					</div>

					{/* Pulsante di invio */}
					<button type="submit" className="btn btn-primary">Invia richiesta</button>

				</form>
			</div>
		</div >
	);
};

export default TicketForm;

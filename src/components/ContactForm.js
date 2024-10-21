export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ccb51268-1700-465d-a6db-00fa5bab6634");

    const object = Object.fromEntries(formData);
    /* object.from_name = object.name; */
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <form
      className="flex flex-col gap-2 w-full max-w-lg bg-sky-600 rounded-lg p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="subject">Subject:</label>
        <input
          className="rounded-lg px-2 text-black"
          style={{ textShadow: "0 0 0" }}
          type="text"
          name="subject"
          id="subject"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message">Message:</label>
        <textarea
          className="rounded-lg px-1 border-4 border-white text-black"
          style={{ textShadow: "0 0 0" }}
          name="message"
          id="message"
        ></textarea>
      </div>
      <div className="flex flex-col">
        <input
          type="hidden"
          name="from_name"
          value="Portfolio Direct Message"
        />
      </div>
      <button className="w-full text-center p-1  bg-sky-700 rounded-lg text" type="submit">Submit Form</button>
    </form>
  );
}

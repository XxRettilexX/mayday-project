export default function Profilo() {
    return (
        <section className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
            <img
                src="https://via.placeholder.com/150"
                alt="Foto Profilo"
                className="w-32 h-32 mx-auto rounded-full border-4 border-indigo-500 shadow-md"
            />
            <h2 className="text-xl font-semibold mt-4">Mario Rossi</h2>
            <p className="text-gray-600 mt-2">
                Sviluppatore web appassionato di tecnologie moderne e design elegante.
            </p>
        </section>
    );
}

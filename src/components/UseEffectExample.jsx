

function UseEffectExample() {


  return (
    <section id="use-effect-example">
      <h2>useEffect: Save a note</h2>
      <p>
        Edit the note, then refresh the page. It stays here because the effect
        saves each change to local storage.
      </p>
      <label htmlFor="saved-note">Your note</label>
      <textarea
        id="saved-note"
        rows="3"
      />
      <button type="button">
        Clear note
      </button>
      <p>
        <code>useEffect</code> runs after rendering. The{" "}
        <code>[note]</code> dependency makes it run again whenever the note
        changes.
      </p>
    </section>
  );
}

export default UseEffectExample;

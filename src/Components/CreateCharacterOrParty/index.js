import React from "react";

export default function CreateCharacterOrPartyForm(props) {
  const { name, pp, gp, ep, sp, cp, showForm } = props.values;
  return (
    <div>
      <button onClick={props.toggleForm}>New {props.type}</button>
      {showForm && (
        <form onSubmit={props.onSubmit}>
          <div>
            <label>name</label>
            <input
              name="name"
              placeholder="name"
              value={name}
              onChange={e => props.onChange(e)}
              required
            />
          </div>
          <div>
            <label>pp</label>
            <input
              name="pp"
              type="number"
              value={pp}
              onChange={e => props.onChange(e)}
            />
          </div>
          <div>
            <label>gp</label>
            <input
              name="gp"
              type="number"
              value={gp}
              onChange={e => props.onChange(e)}
            />
          </div>
          <div>
            <label>ep</label>
            <input
              name="ep"
              type="number"
              value={ep}
              onChange={e => props.onChange(e)}
            />
          </div>
          <div>
            <label>sp</label>
            <input
              name="sp"
              type="number"
              value={sp}
              onChange={e => props.onChange(e)}
            />
          </div>
          <div>
            <label>cp</label>
            <input
              name="cp"
              type="number"
              value={cp}
              onChange={e => props.onChange(e)}
            />
          </div>
          <button type="submit">Create {props.type}</button>
        </form>
      )}
    </div>
  );
}

export default function Form() {
  return (
    <div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Subject</span>
        </label>
        <input type="text" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea className="textarea textarea-bordered" rows={5}></textarea>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Send message</button>
      </div>
    </div>
  );
}

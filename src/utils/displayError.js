export default function displayError(error) {
  const { status, data } = error.response;
  switch (status) {
		case 400:
			return data.issues[0].message;
		case 401:
			return data;
		case 409:
			return "user already exists with this username and/or email";
		case 0:
			return (
				<>
					{error.message.toLowerCase()}... if problem persists, please submit an{" "}
					<a href="https://github.com/brose55/skedge/issues">issue...</a>
				</>
			);
	}
}

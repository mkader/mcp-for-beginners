# Run sample

## Create environment

```sh
python -m venv venv
source ./venv/bin/activate
```

## Install dependencies

```sh
pip install "mcp[cli]" dotenv PyJWT
```

## Run code

Run the code with:

```sh
python server.py
```

In a separate terminal, type:

```sh
python client.py
```
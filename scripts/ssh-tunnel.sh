#!/bin/bash

# Open the URL to the tunneled site after a delay for creating the tunnel
( sleep 3; open http://localhost:3030 ) &

# Bind the local port to the remote port on which the site is served
ssh -L 3030:localhost:3000 <user>@<remotehost>

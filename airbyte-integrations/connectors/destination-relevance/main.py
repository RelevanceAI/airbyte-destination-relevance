#
# Copyright (c) 2022 Airbyte, Inc., all rights reserved.
#


import sys

from destination_relevance import DestinationRelevance

if __name__ == "__main__":
    DestinationRelevance().run(sys.argv[1:])

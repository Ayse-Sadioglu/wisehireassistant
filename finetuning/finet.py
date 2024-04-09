import os
from openai import OpenAI
os.environ['OPENAI_API_KEY'] = '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'


client = OpenAI()

'''client.files.create(
  file=open("comb'ned_prompts", "rb"),
  purpose="fine-tune"
)'''

client.fine_tuning.jobs.create(
  training_file="file-tDBez09v3eujn9yUj0dT2lyE",
  model="gpt-3.5-turbo" 
)
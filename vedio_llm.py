import torch
from diffusers import DiffusionPipeline, DPMSolverMultistepScheduler
from diffusers.utils import export_to_video
import time

def generate_vedio(prompt, filename):
    print(f"\n The vedio engine is booting for your {filename}----")
    start_time = time.time()

    print("Loading the vedio model by initializing the pipeline----")
    pipe = DiffusionPipeline.from_pretrained("damo-vilab/text-to-video-ms-1.7b", torch_dtype=torch.float32)
    print("Now let us use the scheduler to reduce the timef of generating the vedio since ours is a cpu based laptop")
    pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
    print("The scheduler is  enabled please wait for  the math to do the generation work----")
    vedio_frames = pipe(prompt, num_inference_steps = 10, num_frames = 16).frames[0]
    print("The vedio is ready just wrapping up----")
    output_path = f"{filename}.mp4"
    export_to_video(vedio_frames, output_path, fps = 8)
    end_time = time.time()
    minutes = round((end_time - start_time)/60, 1)
    print(f"Here is your vedio it is saved as {output_path} It took {minutes} minutes")


ISRO_missons = {
    "chandrayaan3": " Cinematic 3D render of Chandrayaan-3 spacecraft landing on the dusty moon, glowing thrusters, 4k."
}

generate_vedio(ISRO_missons["chandrayaan3"], "chandrayaan_ai")

class StaticController < ApplicationController
	def home
		render json: { status: "API is live" }
	end
end